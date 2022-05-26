import { onBeforeUnmount, onMounted } from "vue";

export function clickOutside(el_target_ref, callback_fn) {
  let listener = (e) => {
    if (e.target == el_target_ref || e.composedPath().includes(el_target_ref)) {
      return;
    }

    if (typeof callback_fn == "function") {
      callback_fn();
    }
  };

  onMounted(() => {
    window.addEventListener("click", listener);
  });
  onBeforeUnmount(() => {
    window.removeEventListener("click", listener);
  });

  return {
    listener,
  };
}

export function teste(){
  console.log("testando")
}
