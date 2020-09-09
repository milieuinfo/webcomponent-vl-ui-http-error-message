import {define} from '/node_modules/vl-ui-core/dist/vl-core.js';
import {VlHttpErrorMessage} from '/src/vl-http-error-message.js';

define('vl-http-404-message', class extends VlHttpErrorMessage {
  constructor() {
    super({
      title: 'Oeps, die pagina vonden we niet terug',
      image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/page-not-found.svg',
      imageAlt: 'Pagina niet gevonden',
      text: `<p>De pagina die u zoekt, vonden we niet terug.</p>`,
      actions: `<a is="vl-link-button" href="/">Terug naar de startpagina</a>`,
    });
  }
});
