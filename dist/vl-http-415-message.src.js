import {define} from 'vl-ui-core';
import {VlHttpErrorMessage} from 'vl-ui-http-error-message/dist/vl-http-error-message.src.js';

define('vl-http-415-message', class extends VlHttpErrorMessage {
  constructor() {
    super({
      title: 'Sorry, niet ondersteund media type',
      image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg',
      imageAlt: 'Media type niet ondersteund',
      text: `<p>Het media type van de gevraagde gegevens wordt niet ondersteund door de server, waardoor de aanvraag geweigerd werd. <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 415">Mail de helpdesk</a> zodat we u kunnen verderhelpen. Vermeld daarbij het adres hierboven en de fout code 415.</p>`,
      actions: `<a is="vl-link-button" href="/">Terug naar de startpagina</a>`,
    });
  }
});
