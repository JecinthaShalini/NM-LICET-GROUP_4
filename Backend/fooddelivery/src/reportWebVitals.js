const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(metric => {
        onPerfEntry(metric);
        
      });

      getFID(metric => {
        onPerfEntry(metric);

      });

      getFCP(metric => {
        onPerfEntry(metric);

      });

      getLCP(metric => {
        onPerfEntry(metric);

      });

      getTTFB(metric => {
        onPerfEntry(metric);
      });
    });
  }
};

export default reportWebVitals;
