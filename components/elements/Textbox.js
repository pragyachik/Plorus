import React, { useState, useEffect } from 'react';

const TextBoxWithLimit = () => {
  const [text, setText] = useState('');
  const [characterLimit] = useState(2000);
  const [tokenLimit] = useState(500);
  const [exceeded, setExceeded] = useState(false);

  useEffect(() => {
    const charCount = text.length;
    const tokenCount = text.trim().split(/\s+/).filter(Boolean).length;

    if (charCount >= (characterLimit) || tokenCount >= (tokenLimit)) {
      setExceeded(true);
    } else {
      setExceeded(false);
    }
  }, [text, characterLimit, tokenLimit]);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    const charCount = inputValue.length;
    const tokenCount = inputValue.trim().split(/\s+/).filter(Boolean).length;

    if (charCount <= characterLimit && tokenCount <= tokenLimit) {
      setText(inputValue);
    }
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 8) {
      return;
    }

    const charCount = text.length;
    const tokenCount = text.trim().split(/\s+/).filter(Boolean).length;

    if (charCount >= characterLimit || tokenCount >= tokenLimit) {
      event.preventDefault();
    }
  };

  return (
    <div className="h-full flex flex-col">
      <textarea
        className={`p-2 flex-grow border rounded focus:outline-none resize-none ${
          exceeded ? 'border-red-500' : 'border-gray-300'
        } w-full`}
        style={{ height: 'auto' }}
        placeholder="Enter text here..."
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}

      />
      {exceeded && (
        <p className="text-xs text-red-500 text-right mt-1">
          {`Character Limit Reached (${text.length}/${characterLimit} characters, ${
            text.trim().split(/\s+/).filter(Boolean).length
          }/${tokenLimit} tokens)`}
        </p>
      )}
    </div>
  );
};

export default TextBoxWithLimit;
