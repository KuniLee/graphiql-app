import { FC, useEffect, useMemo, useRef } from 'react';
import { useCodeMirror } from '@uiw/react-codemirror';
import { keymap } from '@codemirror/view';
import { defaultKeymap, indentWithTab } from '@codemirror/commands';
import { graphql, updateSchema } from 'cm6-graphql';
import type { GraphQLSchema } from 'graphql';
import customTheme from './codeMirrorTheme';

type EditorProps = {
  schema?: GraphQLSchema;
  defaultValue?: string;
  handleChange?: (e: string) => void;
};

const Editor: FC<EditorProps> = ({ schema, defaultValue, handleChange }) => {
  const editor = useRef<HTMLDivElement>(null);

  const extensions = useMemo(() => [keymap.of([...defaultKeymap, indentWithTab]), graphql(schema)], [schema]);

  const { setContainer, view } = useCodeMirror({
    container: editor.current,
    extensions,
    value: defaultValue,
    theme: customTheme,
    height: '100%',
    onChange: handleChange,
  });

  useEffect(() => {
    if (editor.current) {
      setContainer(editor.current);
    }
  }, [setContainer]);

  useEffect(() => {
    if (view) updateSchema(view, schema);
  }, [schema, view]);

  return <div className="w-full p-2 h-full border-round" ref={editor} />;
};

export default Editor;
