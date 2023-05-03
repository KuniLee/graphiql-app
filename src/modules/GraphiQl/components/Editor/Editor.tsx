import { useRef, useEffect, MutableRefObject } from 'react';
import { basicSetup } from 'codemirror';
import { EditorState } from '@codemirror/state';
import { EditorView, keymap } from '@codemirror/view';
import { defaultKeymap } from '@codemirror/commands';
import { solarizedDark } from 'cm6-theme-solarized-dark';
import { javascript } from '@codemirror/lang-javascript';

const Editor = () => {
  const editor = useRef<HTMLDivElement>();

  useEffect(() => {
    const startState = EditorState.create({
      doc: '',
      extensions: [basicSetup, keymap.of(defaultKeymap), solarizedDark, javascript()],
    });

    const view = new EditorView({ state: startState, parent: editor.current });

    return () => {
      view.destroy();
    };
  }, []);

  return <div ref={editor as MutableRefObject<HTMLDivElement>}></div>;
};

export default Editor;
