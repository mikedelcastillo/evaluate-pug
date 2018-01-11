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
    
  }

};
