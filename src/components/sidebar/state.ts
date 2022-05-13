import { ref, computed } from "vue";

export const collapsed = ref(false);
export const toggleSidebar = () => (collapsed.value = !collapsed.value);

export const SIDEBAR_WIDTH = 180;
export const SIDEBAR_WIDTH_COLLAPSED = 38;

export const sidebarWidth = computed(
  () => `${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`
);

export const sidebarType = () => {
  return {
    topbar: window.innerWidth < 500,
    minibar: window.innerWidth > 500 && window.innerWidth < 1024,
    normal: window.innerWidth > 1024,
  };
};
