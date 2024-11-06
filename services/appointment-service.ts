import { toast } from '@/components/ui/use-toast';
import { QueryKeys } from '@/constants/query-keys';
import catchError from '@/lib/catch-error';
import fetcher from '@/lib/fetcher';
import { ApiResponse } from '@/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

interface AppointmentData {
  name: string;
  date: string;
  slot: number;
  description: string;
  userId: string;
}

const createAppointment = () => {
  const queryClient = useQueryClient();
  const { mutate: create, isPending: createIsPending } = useMutation({
    mutationFn: async (data: AppointmentData): Promise<ApiResponse> => {
      const res = await fetcher.post(`/appointment`, data);
      return res.data;
    },
    onSuccess: (res: ApiResponse) => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.APPOINTMENT]
      });
      console.log(res);

      toast({
        variant: res?.status ? 'default' : 'destructive',
        title: res?.status
          ? 'Appointment Successful'
          : 'Appointment Creation Failed',
        description: res.status
          ? 'New Appointment Created'
          : res?.message || 'There was a problem with your request.'
      });
    },

    onError: (error: Error) => {
      toast({
        variant: 'destructive',
        title: 'Error Creating Appointment',
        description: error.message || 'There was a problem with your request.'
      });
    }
  });

  return { create, createIsPending };
};

const getAppointments = catchError(async () => {
  const {
    data: appointments,
    isLoading,
    error
  } = useQuery<AppointmentData[], Error>({
    queryKey: [QueryKeys.APPOINTMENT],
    queryFn: async () => {
      const response = await fetcher.get<ApiResponse>('/appointments');
      if (!response?.data?.status) {
        throw new Error(
          response?.data?.message || 'Failed to fetch appointments'
        );
      }
      return response.data.data;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
    retry: 2
  });

  return { appointments, isLoading, error };
});

const AppointmentService = { getAppointments, createAppointment };

export default AppointmentService;
