import { reactive } from 'vue'

export const TabType = {
  NORMAL: 0,
  MENU: 1,
  HIGHLIGHT: 2,
}

export let GlobalState = reactive({
  tabs: {
    options: [{
      name: 'Case Studies',
      type: TabType.NORMAL
    },
    {
      name: 'Our Expertise',
      type: TabType.MENU
    },
    {
      name: 'Know Us',
      type: TabType.NORMAL
    },
    {
      name: 'Contact',
      type: TabType.HIGHLIGHT
    }].map((v, id) => ({ id, ...v })),

    activeTabId: 0,
  }
})

