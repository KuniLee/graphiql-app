import { FC } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import customTheme from '@/styles/codeMirrorTheme';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setHeaders } from '@/modules/GraphiQl/store/GraphiQlSliceSlice';

const HeadersField: FC = () => {
  const { headers } = useAppSelector((state) => state.graphiQl);
  const dispatch = useAppDispatch();

  const handleChange = (e: string) => {
    dispatch(setHeaders(e));
  };

  return (
    <CodeMirror
      value={headers}
      className="w-full px-2 pb-2 h-full border-round"
      height="100%"
      basicSetup={{ highlightActiveLine: false }}
      theme={customTheme}
      onChange={(e) => handleChange(e)}
    />
  );
};

export default HeadersField;
