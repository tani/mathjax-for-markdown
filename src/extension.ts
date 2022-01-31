import * as vscode from 'vscode';
import MarkdownIt from 'markdown-it';
import MathJax from 'markdown-it-mathjax3';

export function activate(_context: vscode.ExtensionContext) {
   return {
      extendMarkdownIt(md: MarkdownIt) {
         return md.use(MathJax);
      }
   };
}
