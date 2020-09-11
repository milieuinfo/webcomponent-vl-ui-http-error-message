import {define} from '/node_modules/vl-ui-core/dist/vl-core.js';
import {VlHttpErrorMessage} from '/node_modules/vl-ui-http-error-message/dist/vl-http-error-message.js';

define('vl-http-505-message', class extends VlHttpErrorMessage {
  constructor() {
    super({
      title: 'Sorry, niet ondersteunde HTTP versie',
      image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg',
      imageAlt: 'Niet ondersteunde HTTP versie',
      text: `<p>Uw verzoek is gebeurd met een HTTP versie die niet ondersteund wordt door de server. Vragen? <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 505">Mail de helpdesk</a> zodat we u kunnen verderhelpen. Vermeld daarbij het adres hierboven en de fout code 505. Onze excuses voor het ongemak.</p>`,
      actions: `<a is="vl-link-button" href="/">Terug naar de startpagina</a>`,
    });
  }
});
