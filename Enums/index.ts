// Enum allows u to define a set of named constants.
// Enums are a special "class" that represents a group of constants (unchangeable variables).
enum BookingStatus {
  Pending = "pending",
  paid = "paid",
  cancelled = "cancelled",
}

let bookingStatus: BookingStatus = BookingStatus.Pending;
console.log(bookingStatus); // Output: pending

if (bookingStatus === BookingStatus.Pending) {
  bookingStatus = BookingStatus.paid;
}
console.log(bookingStatus); // Output: paid
