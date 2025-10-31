/**
 * API helper functions for making requests
 */

interface FetchOptions extends RequestInit {
  timeout?: number
}

/**
 * Enhanced fetch with timeout and better error handling
 */
export async function fetchWithTimeout(
  url: string,
  options: FetchOptions = {}
): Promise<Response> {
  const { timeout = 30000, ...fetchOptions } = options

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeout)

  try {
    const response = await fetch(url, {
      ...fetchOptions,
      signal: controller.signal,
    })
    clearTimeout(timeoutId)
    return response
  } catch (error) {
    clearTimeout(timeoutId)
    throw error
  }
}

/**
 * POST request helper
 */
export async function postData<T = any>(
  url: string,
  data: any,
  options: FetchOptions = {}
): Promise<T> {
  const response = await fetchWithTimeout(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    body: JSON.stringify(data),
    ...options,
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: "Unknown error" }))
    throw new Error(error.error || `HTTP error! status: ${response.status}`)
  }

  return response.json()
}

/**
 * GET request helper
 */
export async function getData<T = any>(
  url: string,
  options: FetchOptions = {}
): Promise<T> {
  const response = await fetchWithTimeout(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: "Unknown error" }))
    throw new Error(error.error || `HTTP error! status: ${response.status}`)
  }

  return response.json()
}
