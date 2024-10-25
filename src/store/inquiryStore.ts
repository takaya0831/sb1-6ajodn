import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Inquiry } from '../types';

interface InquiryStore {
  inquiries: Inquiry[];
  addInquiry: (inquiry: Omit<Inquiry, 'id' | 'customerId' | 'status' | 'createdAt'>) => void;
  updateInquiryStatus: (id: string, status: Inquiry['status']) => void;
}

export const useInquiryStore = create<InquiryStore>()(
  persist(
    (set) => ({
      inquiries: [],
      addInquiry: (inquiry) => {
        const newInquiry: Inquiry = {
          id: crypto.randomUUID(),
          customerId: '',
          status: 'new',
          createdAt: new Date().toISOString(),
          ...inquiry,
        };
        set((state) => ({
          inquiries: [newInquiry, ...state.inquiries],
        }));
      },
      updateInquiryStatus: (id, status) =>
        set((state) => ({
          inquiries: state.inquiries.map((inquiry) =>
            inquiry.id === id ? { ...inquiry, status } : inquiry
          ),
        })),
    }),
    {
      name: 'inquiry-storage', // localStorageのキー名
    }
  )
);