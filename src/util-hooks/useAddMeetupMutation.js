import { useMutation, useQueryClient } from '@tanstack/react-query';
import { DB_URL } from '../utils/constants';

const addMeetup = async (newMeetup) => {
  const response = await fetch(DB_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newMeetup),
  });

  if (!response.ok) {
    throw new Error('Failed to add meetup');
  }

  return response.json();
};

export const useAddMeetup = () => {
  const queryClient = useQueryClient();

  return useMutation(addMeetup, {
    onSuccess: () => {
      queryClient.invalidateQueries(['meetups']);
    },
  });
};