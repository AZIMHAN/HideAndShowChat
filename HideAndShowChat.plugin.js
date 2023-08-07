/**
 * @name HideAndShowChat
 * @author AZM
 * @description Adds a button to hide and show the chat section
 * @version 1.0.0
 */

module.exports = class HideAndShowChat {
  start() {
    this.addButton();
  }

  stop() {
    document.querySelectorAll('.toolbar-3_r2xA .toggle-button').forEach(function (button) {
      button.parentNode.removeChild(button);
    });

    BdApi.DOM.removeStyle("HideAndShowChat");
  }

  onSwitch() {
    if (!document.getElementsByClassName('toggle-button').length > 0) {
      this.addButton();
    }
  }

  addButton() {
    const toggleBtn = document.createElement("div");
    const iconBtn = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    toggleBtn.classList.add('toggle-button', 'clickable-ZD7xvu', 'iconWrapper-2awDjA');
    iconBtn.classList.add('icon-button','icon-2xnN2Y');

    toggleBtn.addEventListener("click", () => {
      const mainChat = document.getElementsByClassName('chatContent-3KubbW')[0];

      iconBtn.classList.toggle('btnActive');
      mainChat.classList.toggle('v-h');
    });

    BdApi.UI.createTooltip(toggleBtn, "Hide/Show chat", {side: "bottom",});

    let attributesBtn = {
      'role': 'button',
      'aria-expanded': 'false',
      'tabindex': '0'
    };

    for (let key in attributesBtn) {
      toggleBtn.setAttribute(key, attributesBtn[key]);
    }

    let attributesIcon = {
      'x': '0',
      'y': '0',
      'width': '24',
      'height': '24',
      'fill': 'none',
      'stroke': 'var(--interactive-normal)',
      'stroke-width': '2',
    };

    for (let key in attributesIcon) {
      iconBtn.setAttribute(key, attributesIcon[key]);
    }

    let path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    path1.setAttribute('d', 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z');

    iconBtn.appendChild(path1);
    toggleBtn.appendChild(iconBtn);

    BdApi.DOM.addStyle("HideAndShowChat",
      `.v-h {
        visibility: hidden;
      }
      .icon-button:hover {
        fill: var(--interactive-hover);
        stroke: var(--interactive-hover);
      }
      .btnActive{
        fill: #fff;
        stroke: #fff;
      }
      `);

    const toolbar = document.getElementsByClassName("toolbar-3_r2xA")[0];

    toolbar.prepend(toggleBtn);
  }
}