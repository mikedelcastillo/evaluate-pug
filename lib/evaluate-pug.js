'use babel';

import EvaluatePugView from './evaluate-pug-view';
import { CompositeDisposable } from 'atom';

export default {

  evaluatePugView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.evaluatePugView = new EvaluatePugView(state.evaluatePugViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.evaluatePugView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'evaluate-pug:evaluate': () => this.evaluate()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.evaluatePugView.destroy();
  },

  serialize() {
    return {
      evaluatePugViewState: this.evaluatePugView.serialize()
    };
  },

  toggle() {
    console.log('EvaluatePug was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  },

  evaluate(){
    let editor = atom.workspace.getActiveTextEditor();
    let self = this;

    if(editor) {
      const pug = require('pug');
      editor.selectLinesContainingCursors();
      let selection = editor.getSelectedText();

      let indentation = (selection.match(/^[\t\ ]*/gmi) || [''])[0];

      try{
        //remove indentation
        selection = selection.replace(new RegExp(`^${indentation}`), '');
        let html = pug.render(selection,);

        //prettify
        html = require('pretty')(html, {ocd: true});

        //return indentation
        html = html
        .split("\n")
        .map(s => indentation + s)
        .join("\n");
        html += "\n";

        editor.insertText(html);
      } catch(e){
        atom.notifications.addWarning("Could not evaluate pug :(")
      }

    }
  }

};
