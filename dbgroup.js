function setup_university_logos() {
  const perViewFromWidth = (screen_width) => {
    // The .center element is 700px wide. Every logo is 75px wide. So, we divide
    // 700 by 75 to see how many logos will fit and subtract 1 to give it a bit
    // of space.
    const width = Math.min(screen_width, 700);
    return Math.max(1, Math.floor(width / 75) - 1);
  }

  const glide = new Glide('#university-logos', {
    type: 'carousel',
    perView: perViewFromWidth(window.screen.width),
    autoplay: 2000,
    hoverpause: true,
    keyboard: false,
  });

  glide.on('resize', function() {
    glide.update({perView: perViewFromWidth(window.screen.width)});
  });

  glide.mount();
}

function setup_company_logos() {
  const perViewFromWidth = (screen_width) => {
    // The .center element is 700px wide. Every logo is 150px wide. So, we
    // divide 700 by 150 to see how many logos will fit and subtract 1 to give
    // it a bit of space.
    const width = Math.min(screen_width, 700);
    return Math.max(1, Math.floor(width / 150) - 1);
  }

  const glide = new Glide('#company-logos', {
    type: 'carousel',
    perView: perViewFromWidth(window.screen.width),
    autoplay: 2000,
    hoverpause: true,
    keyboard: false,
  });

  glide.on('resize', function() {
    glide.update({perView: perViewFromWidth(window.screen.width)});
  });

  glide.mount();
}

function setup_startup_logos() {
  const perViewFromWidth = (screen_width) => {
    // The .center element is 700px wide. Every logo is 150px wide. So, we
    // divide 700 by 100 to see how many logos will fit and subtract 1 to give
    // it a bit of space.
    const width = Math.min(screen_width, 700);
    return Math.max(1, Math.floor(width / 150) - 1);
  }

  const glide = new Glide('#startup-logos', {
    type: 'carousel',
    perView: perViewFromWidth(window.screen.width),
    autoplay: 2000,
    hoverpause: true,
    keyboard: false,
  });

  glide.on('resize', function() {
    glide.update({perView: perViewFromWidth(window.screen.width)});
  });

  glide.mount();
}

function main() {
  setup_university_logos();
  setup_company_logos();
  setup_startup_logos();
}

window.onload = main;
