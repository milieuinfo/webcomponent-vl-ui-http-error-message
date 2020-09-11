import {define} from '/node_modules/vl-ui-core/dist/vl-core.js';
import {VlHttpErrorMessage} from '/node_modules/vl-ui-http-error-message/dist/vl-http-error-message.js';

define('vl-http-404-message', class extends VlHttpErrorMessage {
  constructor() {
    super({
      title: 'Oeps, die pagina vonden we niet terug',
      image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/page-not-found.svg',
      imageAlt: 'Pagina niet gevonden',
      text: `<p>De pagina die u zoekt, vonden we niet terug. Heeft u het adres van deze pagina zelf ingetypt? Controleer dan even of u geen typfouten heeft gemaakt. Bent u op de pagina terechtgekomen via een link op deze of een andere website? <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 404">Mail dan de helpdesk</a> zodat we u kunnen verderhelpen. Vermeld daarbij het adres hierboven en de fout code 404.</p>`,
      actions: `<a is="vl-link-button" href="/">Terug naar de startpagina</a>`,
    });
  }
});
