import RNFishjamClientModule from '../RNFishjamClientModule';
import { LoggingSeverity } from './types';

export { useRTCStatistics } from './useRTCStatistics';

/**
 * Function that changes level of debugging logs in WebRTC.
 * @param severity to use when displaying logs
 * @returns a promise that is resolved when debug severity is changed
 */
export function changeWebRTCLoggingSeverity(
  severity: LoggingSeverity,
): Promise<void> {
  return RNFishjamClientModule.changeWebRTCLoggingSeverity(severity);
}
