import React, { useEffect, useRef } from 'react';

export const TradingViewTicker: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Clear any existing children to prevent duplicates
    containerRef.current.innerHTML = '';

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: 'FOREXCOM:EURUSD', title: 'EUR/USD' },
        { proName: 'FOREXCOM:GBPUSD', title: 'GBP/USD' },
        { proName: 'FOREXCOM:USDJPY', title: 'USD/JPY' },
        { proName: 'FOREXCOM:USDCHF', title: 'USD/CHF' },
        { proName: 'FOREXCOM:AUDUSD', title: 'AUD/USD' },
        { proName: 'FOREXCOM:NZDUSD', title: 'NZD/USD' },
        { proName: 'FOREXCOM:USDCAD', title: 'USD/CAD' },
        { proName: 'OANDA:XAUUSD', title: 'XAU/USD' },
        { proName: 'OANDA:XAGUSD', title: 'XAG/USD' },
        { proName: 'BINANCE:BTCUSD', title: 'BTC/USD' },
        { proName: 'BINANCE:ETHUSD', title: 'ETH/USD' },
      ],
      showSymbolLogo: true,
      colorTheme: 'dark',
      isTransparent: true,
      displayMode: 'adaptive',
      locale: 'en',
    });
    
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="w-full bg-black border-t border-b border-gold-premium/20 py-1">
      <div ref={containerRef} className="tradingview-widget-container" />
    </div>
  );
};
