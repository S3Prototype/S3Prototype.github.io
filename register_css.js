  const gradientColors = [
    'hsl(346deg, 63%, 50%)', // salmon
    'hsl(9deg, 62%, 54%)', // orange
    'hsl(329deg, 100%, 30%)', // red
    'hsl(328deg, 92%, 41%)', // hot-pink
    'hsl(283deg, 70%, 46%)' //magenta
    // 'hsl(256deg, 50%, 3%)' //black
  ];
  const paletteSize = gradientColors.length;
  // Number of milliseconds for each update
  const intervalDelay = 1000;
  const colorNames = [
    '--salmon',
    '--orange',
    '--red',
    '--hot-pink',
    '--magenta'
    // '--black'
  ];
  // Register properties
  colorNames.forEach((name, index) => {
    CSS.registerProperty({
      name,
      syntax: '<color>',
      inherits: false,
      initialValue: gradientColors[index],
    });
  });
//   console.log(headshotContainer);
  let cycleIndex = 0;
  window.setInterval(() => {
    // Shift every color up by one position.
    //
    // `% paletteSize` is a handy trick to ensure
    // that values "wrap around"; if we've exceeded
    // the number of items in the array, it loops
    // back to 0.
    const nextColors = [
      gradientColors[(cycleIndex + 1) % paletteSize],
      gradientColors[(cycleIndex + 2) % paletteSize],
      gradientColors[(cycleIndex + 3) % paletteSize],
    ];
    const headshotContainer = document.getElementById('headshot-container');    
    // Apply these new colors, update the DOM.
    colorNames.forEach((name, index) => {
      headshotContainer.style.setProperty(name, nextColors[index]);
    });
    // increment the cycle count, so that we advance
    // the colors in the next loop.
    cycleIndex++;
  }, intervalDelay);