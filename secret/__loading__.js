pc.script.createLoadingScreen(function (app) {
    var showSplash = function () {
        // splash wrapper
        var wrapper = document.createElement('div');
        wrapper.id = 'application-splash-wrapper';
        document.body.appendChild(wrapper);

        // splash
        var splash = document.createElement('div');
        splash.id = 'application-splash';
        wrapper.appendChild(splash);
        splash.style.display = 'none';

        var logo = document.createElement('img');
        logo.src = 'https://www.morita119.com/images/header_logo.png'; // TODO: 正式なものに変更
        splash.appendChild(logo);
        logo.onload = function () {
            splash.style.display = 'block';
        };

        // Loading text
        var loadingText = document.createElement('div');
        loadingText.id = 'loading-text';
        loadingText.innerText = 'Loading...';
        splash.appendChild(loadingText);

        // Progress bar container
        var container = document.createElement('div');
        container.id = 'progress-bar-container';
        splash.appendChild(container);

        var bar = document.createElement('div');
        bar.id = 'progress-bar';
        container.appendChild(bar);
    };

    var hideSplash = function () {
        var splash = document.getElementById('application-splash-wrapper');
        splash.parentElement.removeChild(splash);
    };

    var setProgress = function (value) {
        var bar = document.getElementById('progress-bar');
        if (bar) {
            value = Math.min(1, Math.max(0, value));
            bar.style.width = value * 100 + '%';
        }
    };

    var createCss = function () {
        var css = [
            'body {',
            '    background-color: #283538;',
            '}',
            '',
            '#application-splash-wrapper {',
            '    position: absolute;',
            '    top: 0;',
            '    left: 0;',
            '    height: 100%;',
            '    width: 100%;',
            '    background-color: #FFFFFF;',
            '}',
            '',
            '#application-splash {',
            '    position: absolute;',
            '    top: calc(50% - 50px);', // 少し上に配置調整
            '    width: 264px;',
            '    left: calc(50% - 132px);',
            '    text-align: left;', // テキスト配置
            '}',
            '',
            '#application-splash img {',
            '    width: 100%;',
            '}',
            '',
            '#loading-text {',
            '    font-size: 18px;',
            '    font-weight: bold;',
            '    color: #000;',
            '    margin-top: 40px',
            '    margin-bottom: 0px;',
            '    animation: blink 2s infinite alternate;', // 点滅アニメーション
            '}',
            '',
            '@keyframes blink {',
            '    0% { opacity: 1; }',
            '    100% { opacity: 0; }',
            '}',
            '',
            '#progress-bar-container {',
            '    margin: 0px auto 0 auto;',
            '    height: 5px;',
            '    width: 100%;',
            '    background-color: #ffffff;',
            '    border: 1px solid #000000;',
            '}',
            '',
            '#progress-bar {',
            '    width: 0%;',
            '    height: 100%;',
            '    background-color:  #E50038;',
            '}',
            '',
            '@media (max-width: 480px) {',
            '    #application-splash {',
            '        width: 170px;',
            '        left: calc(50% - 85px);',
            '    }',
            '}'
        ].join('\n');

        var style = document.createElement('style');
        style.type = 'text/css';
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }

        document.head.appendChild(style);
    };

    createCss();
    showSplash();

    app.on('preload:end', function () {
        app.off('preload:progress');
    });
    app.on('preload:progress', setProgress);
    app.on('start', hideSplash);
});
