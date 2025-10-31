import { toast } from "sonner"

/**
 * Centralized toast notification configuration
 * Provides consistent styling and behavior across the app
 */

export const toastConfig = {
  success: (message: string, description?: string) => {
    return toast.success(message, {
      description,
      duration: 4000,
    })
  },

  error: (message: string, description?: string) => {
    return toast.error(message, {
      description,
      duration: 5000,
    })
  },

  info: (message: string, description?: string) => {
    return toast.info(message, {
      description,
      duration: 4000,
    })
  },

  warning: (message: string, description?: string) => {
    return toast.warning(message, {
      description,
      duration: 4000,
    })
  },

  loading: (message: string) => {
    return toast.loading(message)
  },

  promise: <T,>(
    promise: Promise<T>,
    messages: {
      loading: string
      success: string | ((data: T) => string)
      error: string | ((error: Error) => string)
    }
  ) => {
    return toast.promise(promise, messages)
  },
}
