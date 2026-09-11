import { useEffect } from 'react';

type UseEditorChromeOptions = {
  drawingName: string;
};

export const useEditorChrome = ({ drawingName }: UseEditorChromeOptions) => {
  useEffect(() => {
    document.title = `${drawingName} - ExcaliDash`;
    return () => {
      document.title = 'ExcaliDash';
    };
  }, [drawingName]);
};
