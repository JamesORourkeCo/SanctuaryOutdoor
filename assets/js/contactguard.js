// contactguardv0001 (2026-10-17): the email address and telephone number are not written in the page source as
// plain text, so address-harvesting bots that read pages do not find them. They are stored reversed in data
// attributes and put together only when a person clicks:
//   a.cg-mail       opens an email to the address (data-q keeps the original subject/body, already encoded)
//   a.cg-mail-show  first click shows the address (and makes it a normal email link)
//   a.cg-tel        calls the number          a.cg-sms   opens a text message to the number
//   a.cg-tel-show   first click shows the number (and makes it a normal call link)
//   a.cg-vcard      saves the contact card (built here, so no file with the details sits on the server)
// contactguardv0002 (operator: older visitors on a PC with no phone link must SEE the number and email at the top of
// the page to type them in): a.cg-tel-auto and a.cg-mail-auto are filled in as soon as the page opens, next to the
// Click to Text and Click to Call buttons. They are still not in the page source, so bots that read pages do not see them.
(function () {
  function rev(s) { return (s || "").split("").reverse().join(""); }
  function mail(el) { return rev(el.getAttribute("data-e")).replace("|", "@"); }
  function digits(el) { return rev(el.getAttribute("data-t")); }
  function pretty(d) { return "(" + d.slice(0, 3) + ") " + d.slice(3, 6) + "-" + d.slice(6); }
  function fillAuto() {
    var i, el, list = document.querySelectorAll("a.cg-tel-auto");
    for (i = 0; i < list.length; i++) { el = list[i]; var d = digits(el); el.textContent = pretty(d); el.href = "tel:+1" + d; }
    list = document.querySelectorAll("a.cg-mail-auto");
    for (i = 0; i < list.length; i++) { el = list[i]; var a = mail(el); el.textContent = a; el.href = "mailto:" + a; }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fillAuto); else fillAuto();
  document.addEventListener("click", function (ev) {
    var el = ev.target.closest ? ev.target.closest("a.cg-mail, a.cg-mail-show, a.cg-tel, a.cg-sms, a.cg-tel-show, a.cg-vcard") : null;
    if (!el) return;
    if (el.classList.contains("cg-mail")) {
      ev.preventDefault();
      var q = el.getAttribute("data-q");
      window.location.href = "mailto:" + mail(el) + (q ? "?" + q : "");
    } else if (el.classList.contains("cg-mail-show")) {
      ev.preventDefault();
      var a = mail(el);
      el.textContent = a; el.href = "mailto:" + a; el.classList.remove("cg-mail-show");
    } else if (el.classList.contains("cg-tel")) {
      ev.preventDefault();
      window.location.href = "tel:+1" + digits(el);
    } else if (el.classList.contains("cg-sms")) {
      ev.preventDefault();
      window.location.href = "sms:+1" + digits(el);
    } else if (el.classList.contains("cg-tel-show")) {
      ev.preventDefault();
      var d = digits(el);
      el.textContent = pretty(d); el.href = "tel:+1" + d; el.classList.remove("cg-tel-show");
    } else if (el.classList.contains("cg-vcard")) {
      ev.preventDefault();
      var card = ["BEGIN:VCARD", "VERSION:3.0", "N:Sanctuary Outdoor;;;;", "FN:Sanctuary Outdoor", "ORG:Sanctuary Outdoor",
        "TEL;TYPE=WORK,VOICE:" + digits(el),
        "ADR;TYPE=WORK:;;3880 Stockton Hill Rd Ste 103 #270;Kingman;AZ;86409;USA",
        "EMAIL;TYPE=WORK:" + mail(el), "URL:https://sanctuaryoutdoor.com/", "END:VCARD"].join("\r\n") + "\r\n";
      var url = URL.createObjectURL(new Blob([card], { type: "text/vcard" }));
      var link = document.createElement("a");
      link.href = url; link.download = "sanctuary-outdoor.vcf";
      document.body.appendChild(link); link.click(); link.remove();
      setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    }
  });
})();
