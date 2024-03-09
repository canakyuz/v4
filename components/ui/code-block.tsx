import React from 'react';
import { Post, Project } from '@/utils/interface';

type CodeBlockProps = {
 data: {
  code: string;
  filename: string;
  language: string;
 };
};

const CodeBlock: React.FC<CodeBlockProps> = ({ data }) => {
 const { code, filename, language } = data;

 return (
  <div>
   <div className="flex justify-between">
    <p className='opacity-70'>
     {filename}
    </p>
    <p>
     language: <span className="opacity-70">{language}</span>
    </p>
   </div>
   <pre className='p-2'>
    <code>
     {/* this method has no syntax highlighting,
          look below for that */}
     {code}
    </code>
   </pre>
  </div>
 );
};

export default CodeBlock;
