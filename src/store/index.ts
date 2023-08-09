import create from 'zustand'

interface GlobeState {
  story: string | number | null | undefined;
  setStory: (s: string | number | null | undefined) => void
}

export const useGlobeStore = create<GlobeState>((set) => ({
  story: null,
  setStory: (s) => set(() => ({ story: s })),
}))