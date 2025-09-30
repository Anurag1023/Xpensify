// Timezone utilities for IST (Indian Standard Time)
// IST is UTC+5:30

const IST_OFFSET_MS = 5.5 * 60 * 60 * 1000; // 5.5 hours in milliseconds

/**
 * Get current date and time in IST
 * @returns {Date} Current date in IST
 */
export function getISTDate() {
  const now = new Date();
  return new Date(now.getTime() + IST_OFFSET_MS);
}

/**
 * Convert any date to IST
 * @param {Date|string} date - Date to convert
 * @returns {Date} Date adjusted to IST
 */
export function toIST(date) {
  const inputDate = new Date(date);
  return new Date(inputDate.getTime() + IST_OFFSET_MS);
}

/**
 * Get start of month in IST
 * @param {Date} date - Reference date
 * @returns {Date} Start of month in IST
 */
export function getStartOfMonthIST(date = new Date()) {
  const istDate = toIST(date);
  return new Date(istDate.getFullYear(), istDate.getMonth(), 1);
}

/**
 * Get end of month in IST
 * @param {Date} date - Reference date
 * @returns {Date} End of month in IST
 */
export function getEndOfMonthIST(date = new Date()) {
  const istDate = toIST(date);
  return new Date(istDate.getFullYear(), istDate.getMonth() + 1, 0, 23, 59, 59, 999);
}

/**
 * Format date for IST display
 * @param {Date} date - Date to format
 * @returns {string} Formatted date string
 */
export function formatISTDate(date) {
  const istDate = toIST(date);
  return istDate.toLocaleDateString('en-IN', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Format datetime for IST display
 * @param {Date} date - Date to format
 * @returns {string} Formatted datetime string
 */
export function formatISTDateTime(date) {
  const istDate = toIST(date);
  return istDate.toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}