"use client"

import * as React from "react"
import useEmblaCarousel, {
 type UseEmblaCarouselType,
} from "embla-carousel-react"

import { IconChevronRight, IconChevronLeft } from '@tabler/icons-react';

import { cn } from "@/utils/cn"
import { Button } from "@/components/ui/button"
import ClassNames from "classnames";

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
 opts?: CarouselOptions
 plugins?: CarouselPlugin
 orientation?: "horizontal" | "vertical"
 setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
 carouselRef: ReturnType<typeof useEmblaCarousel>[0]
 api: ReturnType<typeof useEmblaCarousel>[1]
 scrollPrev: () => void
 scrollNext: () => void
 canScrollPrev: boolean
 canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
 const context = React.useContext(CarouselContext)

 if (!context) {
  throw new Error("useCarousel must be used within a <Carousel />")
 }

 return context

}

const Carousel = React.forwardRef<
 HTMLDivElement,
 React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
 (
  {
   orientation = "horizontal",
   opts,
   setApi,
   plugins,
   className,
   children,
   ...props
  },
  ref
 ) => {
  const [carouselRef, api] = useEmblaCarousel(
   {
    ...opts,
    axis: orientation === "horizontal" ? "x" : "y",
   },
   plugins
  )
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const onSelect = React.useCallback((api: CarouselApi) => {
   if (!api) {
    return
   }

   setCanScrollPrev(api.canScrollPrev())
   setCanScrollNext(api.canScrollNext())
  }, [])

  const scrollPrev = React.useCallback(() => {
   api?.scrollPrev()
  }, [api])

  const scrollNext = React.useCallback(() => {
   api?.scrollNext()
  }, [api])

  const handleKeyDown = React.useCallback(
   (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "IconCircleArrowRight") {
     event.preventDefault()
     scrollPrev()
    } else if (event.key === "ArrowRight") {
     event.preventDefault()
     scrollNext()
    }
   },
   [scrollPrev, scrollNext]
  )

  React.useEffect(() => {
   if (!api || !setApi) {
    return
   }

   setApi(api)
  }, [api, setApi])

  React.useEffect(() => {
   if (!api) {
    return
   }

   onSelect(api)
   api.on("reInit", onSelect)
   api.on("select", onSelect)

   return () => {
    api?.off("select", onSelect)
   }
  }, [api, onSelect])

  return (
   <CarouselContext.Provider
    value={{

     carouselRef,
     api: api,
     opts,
     orientation:
      orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
     setApi,
     scrollPrev,
     scrollNext,
     canScrollPrev,
     canScrollNext,

    }}
   >
    <div
     ref={ref}
     onKeyDownCapture={handleKeyDown}
     className={cn("relative", className)}
     role="region"
     aria-roledescription="carousel"
     {...props}
    >
     {children}
    </div>
   </CarouselContext.Provider>
  )
 }
)
Carousel.displayName = "Carousel"
// Carousel bileşenlerindeki özelleştirilmiş hook


const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
 ({ className, children, ...props }, ref) => {
  const { carouselRef, orientation, api } = useCarousel()
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  React.useEffect(() => {
   if (!api) {
    return
   }

   const onSelect = () => {
    setSelectedIndex(api.selectedScrollSnap())
   }

   onSelect()
   api.on("select", onSelect)

   return () => {
    api.off("select", onSelect)
   }
  }, [api])

  return (
   <div ref={carouselRef} className="overflow-hidden">
    <div
     ref={ref}
     className={cn(
      "flex",
      orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
      className
     )}
     {...props}
    >
     {React.Children.map(children, (child, index) => {
      const selected = index === selectedIndex
      return (
       <CarouselItem
        className={cn("opacity-20 duration-150", {
         "opacity-100 duration-150": selected,
        })}
       >
        {child}
       </CarouselItem>
      )
     })}
    </div>
   </div>
  )
 })
CarouselContent.displayName = "CarouselContent"



/* Aktif olmayan carousel itemleri için opacity %30 yapmak istiyorum. */
const CarouselItem = React.forwardRef<
 HTMLDivElement,
 React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
 const { orientation } = useCarousel()

 return (
  <div
   ref={ref}
   role="group"
   aria-roledescription="slide"
   className={cn(
    "min-w-0 mx-auto shrink-0 grow-0 md:basis-4/5 basis-full h-full",
    orientation === "horizontal" ? "pl-4" : "pt-4",
    className
   )}
   {...props}
  />
 )

})
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<
 HTMLButtonElement,
 React.ComponentProps<typeof Button>
>(({ className, variant = "ghost", size = "icon", ...props }, ref) => {
 const { orientation, scrollPrev, canScrollPrev } = useCarousel()

 return (
  <Button
   ref={ref}
   variant={variant}
   size={size}
   className={cn(
    "absolute  h-8 w-8 rounded-full md:flex hidden",
    orientation === "horizontal"
     ? "-left-12 top-1/2 -translate-y-1"
     : "-top-12 left-1/2 -translate-x-1 rotate-90",
    className
   )}
   disabled={!canScrollPrev}
   onClick={scrollPrev}
   {...props}
  >
   <IconChevronLeft className="h-6 w-6" />
   <span className="sr-only">Previous slide</span>
  </Button>
 )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
 HTMLButtonElement,
 React.ComponentProps<typeof Button>
>(({ className, variant = "ghost", size = "icon", ...props }, ref) => {
 const { orientation, scrollNext, canScrollNext } = useCarousel()

 return (
  <Button
   ref={ref}
   variant={variant}
   size={size}
   className={cn(
    "absolute h-8 w-8 rounded-full md:flex hidden",
    orientation === "horizontal"
     ? "-right-12 top-1/2 -translate-y-1"
     : "-bottom-12 left-1/2 -translate-x-1 rotate-90",
    className
   )}
   disabled={!canScrollNext}
   onClick={scrollNext}
   {...props}
  >
   <IconChevronRight className="h-6 w-6" />
   <span className="sr-only">Next slide</span>
  </Button>
 )
})
CarouselNext.displayName = "CarouselNext"

const CarouselDots = React.forwardRef<
 HTMLDivElement,
 React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
 const { api } = useCarousel()
 const [selectedIndex, setSelectedIndex] = React.useState(0)

 React.useEffect(() => {
  if (!api) {
   return
  }

  const onSelect = () => {
   setSelectedIndex(api.selectedScrollSnap())
  }

  onSelect()
  api.on("select", onSelect)

  return () => {
   api.off("select", onSelect)
  }
 }, [api])

 if (!api) {
  return null
 }

 const arr = new Array(api.slideNodes().length).fill(0)

 return (
  <div ref={ref} className="flex gap-1 my-2 justify-center -translate-y-5 mt-6">
   {arr.map((_, index) => {
    const selected = index === selectedIndex
    return (
     <div
      className={cn(
       "h-[6px] w-[6px] rounded-full border-primary md:border-[1.6px] border-[1px] cursor-pointer hover:border-primary active:border-primary",
       {
        "opacity-40": !selected,
       }
      )}
      key={index}
     ></div>
    )
   })}
  </div>
 )
})
CarouselDots.displayName = "CarouselDots"

export {
 type CarouselApi,
 Carousel,
 CarouselContent,
 CarouselItem,
 CarouselPrevious,
 CarouselNext,
 CarouselDots,
}