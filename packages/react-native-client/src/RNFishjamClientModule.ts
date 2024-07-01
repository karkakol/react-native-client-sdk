import { requireNativeModule } from 'expo-modules-core';
import { NativeModule } from 'react-native';

import { RNFishjamClient } from './RNFishjamClient.types';
import { NativeMembraneMock } from './__mocks__/native';
import type { RTCStats } from './debug/types';
import { isJest } from './utils';

const nativeModule = isJest()
  ? NativeMembraneMock
  : requireNativeModule('RNFishjamClient');

type FishjamDebugFunctions = {
  changeWebRTCLoggingSeverity: (severity: string) => Promise<void>;
  getStatistics: () => Promise<RTCStats>;
};

export default nativeModule as RNFishjamClient &
  FishjamDebugFunctions &
  NativeModule;
