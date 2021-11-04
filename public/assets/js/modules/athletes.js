export class Athletes {
  constructor(deleteItemButtonId) {
    this.delete(deleteItemButtonId);
  }
  delete(deleteItemButtonId) {
    const deleteBtns = document.querySelectorAll(`#${deleteItemButtonId}`);
    for (const btn of deleteBtns) {
      btn.addEventListener("click", async (event) => {
        const endpoint = `/athletes/${btn.dataset.doc}`;
        try {
          const response = await fetch(endpoint, { method: "DELETE" });
          const data = await response.json();
          window.location.href = data.redirect;
        } catch (error) {
          console.log(error);
        }
      });
    }
  }
}
