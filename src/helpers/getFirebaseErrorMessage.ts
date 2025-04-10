import { FirebaseError } from 'firebase/app';

export function getFirebaseErrorMessage(error: unknown): string {
  if (error instanceof FirebaseError) {
    switch (error.code) {
      case 'auth/invalid-credential':
        return 'Invalid email or password.';
      case 'auth/email-already-in-use':
        return 'This email is already in use.';
      case 'auth/too-many-requests':
        return 'Too many attempts. Please try again later.';

      default:
        return 'An unexpected error occurred. Please try again.';
    }
  }

  return 'An unknown error occurred.';
}
