import create from 'zustand';

// 테스트 코드 삭제 가능
interface ID {
    id: string;
    setId: (id: string) => void;
  }
  
  const IdStore = create<ID>((set) => ({
    id: "jian",
    setId: (id) =>  set((state) => ({ id })),
  }));
  
  export default IdStore;