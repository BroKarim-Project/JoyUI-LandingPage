import React, { useEffect } from 'react';
import Prism from 'prismjs'; // Make sure you have PrismJS installed

interface CodeHighlightProps {
  prefixCls?: string;
  className?: string;
  language?: string;
  source?: string;
  children?: React.ReactNode;
}

const CodeHighlight: React.FC<CodeHighlightProps> = ({ prefixCls = 'code-highlight-wrapper', className, language, source, children, ...others }) => {
  const codeRef = React.createRef<HTMLElement>();

  useEffect(() => {
    async function highlight() {
      if (codeRef.current) {
        Prism.highlightElement(codeRef.current);
      }
    }

    highlight();
  }, [source]);

  return (
    <pre
      className={`bg-gray-200 text-gray-800 overflow-auto ${prefixCls} ${className || ''} `}
      {...others}
      style={{
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
        paddingLeft: '15px',
      }}
    >
      <code ref={codeRef}>{source || children}</code>
    </pre>
  );
};

export default CodeHighlight;
