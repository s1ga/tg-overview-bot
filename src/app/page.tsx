'use client';

import useOverviewModal from '@/app/hooks/overview-modal';
import useRegisterModal from '@/app/hooks/register-modal';
import { init, selectIsAuth } from '@/store/features/client/client-slice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { Button } from '@mui/material';
import { useEffect } from 'react';

export default function Home() {
  const displayRegisterModal = useRegisterModal();
  const displayOverviewModal = useOverviewModal();
  const isAuth = useAppSelector(selectIsAuth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(init());
  }, [dispatch]);

  // TODO: add logout button
  return (
    <main>
      {isAuth && <Button onClick={displayOverviewModal} variant="outlined">Create notifier</Button>}
      {!isAuth
       && <Button onClick={displayRegisterModal} variant="outlined">
        Connect your Telegram
      </Button>
      }
    </main>
  );
}
