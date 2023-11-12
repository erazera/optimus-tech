class MobileMenu{
    constructor(mobileMenu, containerList, listLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.containerList = document.querySelector(containerList);
      this.listLinks = document.querySelectorAll(listLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.listLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `linkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
      });
    }
  
    handleClick() {
      this.containerList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileMenu = new MobileMenu(
    ".mobile-menu",
    ".container__list",
    ".list__link",
  );
  mobileMenu.init();


  