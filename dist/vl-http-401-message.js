import {define} from '/node_modules/vl-ui-core/dist/vl-core.js';
import {VlHttpErrorMessage} from '/node_modules/vl-ui-http-error-message/dist/vl-http-error-message.js';

define('vl-http-401-message', class extends VlHttpErrorMessage {
  constructor() {
    super({
      title: 'Sorry, u moet zich eerst aanmelden',
      image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg',
      imageAlt: 'Niet aangemeld',
      text: `<p>Voor het verzoek dat u heeft gedaan moet u aangemeld zijn. Bent u wèl aangemeld en zou u toegang moeten hebben tot deze pagina, <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 401">Mail de helpdesk</a> zodat we u kunnen verderhelpen. Vermeld daarbij het adres hierboven en de fout code 401.</p>`,
      actions: `<a is="vl-link-button" href="/">Terug naar de startpagina</a>`,
    });
  }
});
