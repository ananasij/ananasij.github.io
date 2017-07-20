import React from 'react';

class YandexMetrika extends React.Component {
    initYM(d, w, c) {
        (w[c] = w[c] || []).push(() => {
            try {
                w.yaCounter45370506 = new Ya.Metrika({
                    id: 45370506,
                    clickmap: true,
                    trackLinks: true,
                    accurateTrackBounce: true,
                    webvisor: true
                });
            } catch (e) {}
        });

        const n = d.getElementsByTagName('script')[0];
        const s = d.createElement('script');
        const f = () => { n.parentNode.insertBefore(s, n); };
        s.type = 'text/javascript';
        s.async = true;
        s.src = 'https://mc.yandex.ru/metrika/watch.js';

        if (w.opera === '[object Opera]') {
            d.addEventListener('DOMContentLoaded', f, false);
        } else { f(); }
    }

    render() {
        return (
            <div>
                {() => this.initYM(document, window, 'yandex_metrika_callbacks')}
                <noscript><div><img src="https://mc.yandex.ru/watch/45370506" style={{ position: 'absolute', left: -9999 }} alt="" /></div></noscript>
            </div>
        );
    }

}

export default YandexMetrika;
