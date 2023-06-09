import { EditorView } from '@codemirror/view';

export default EditorView.theme({
  '&': {
    backgroundColor: '#0e1315',
    borderRadius: '6px',
    padding: '5px',
    color: '#fff',
  },
  '.cm-gutters': {
    backgroundColor: '#0e1315',
    borderRight: 'none',
    color: '#fff',
  },
  '.cm-activeLine, .cm-activeLineGutter': {
    backgroundColor: 'unset',
  },
  '.cm-cursor': {
    borderLeft: '1.2px solid #fff',
  },
  '.ͼb': {
    color: '#D60590',
  },
  '.ͼc': {
    color: '#009FB8',
  },
  '.ͼd': {
    color: '#009FB8',
  },
  '.cm-line': {
    color: '#007DEB',
  },
  '.ͼ1.cm-focused .cm-matchingBracket,.cm-matchingBracket': {
    backgroundColor: 'var(--primary-300) !important',
  },
  '.cm-scroller': {
    lineHeight: '1.7',
    fontSize: '1.15em',
  },
  '.cm-tooltip': {
    color: '#000',
  },
});
