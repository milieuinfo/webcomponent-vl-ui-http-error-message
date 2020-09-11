import {define} from '/node_modules/vl-ui-core/dist/vl-core.js';
import {VlHttpErrorMessage} from '/node_modules/vl-ui-http-error-message/dist/vl-http-error-message.js';

define('vl-http-410-message', class extends VlHttpErrorMessage {
  constructor() {
    super({
      title: 'Oeps, dit bestaat niet meer',
      image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/page-not-found.svg',
      imageAlt: 'Verzoek bestaat niet meer',
      text: `<p>Uw verzoek lijkt niets op te leveren omdat het niet meer bestaat. Vragen? <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 410">Mail de helpdesk</a> zodat we u kunnen verderhelpen. Vermeld daarbij het adres hierboven en de fout code 410.</p>`,
      actions: `<a is="vl-link-button" href="/">Terug naar de startpagina</a>`,
    });
  }
});
