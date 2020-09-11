import {define} from '/node_modules/vl-ui-core/dist/vl-core.js';
import {VlHttpErrorMessage} from '/node_modules/vl-ui-http-error-message/dist/vl-http-error-message.js';

define('vl-http-415-message', class extends VlHttpErrorMessage {
  constructor() {
    super({
      title: 'Sorry, niet ondersteund media type',
      image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg',
      imageAlt: 'Media type niet ondersteund',
      text: `<p>Het media type van de gevraagde gegevens wordt niet ondersteund door de server, waardoor de aanvraag geweigerd werd.</p>`,
      actions: `<a is="vl-link-button" href="/">Terug naar de startpagina</a>`,
    });
  }
});
