![The Wild Oasis](<[text](https://images.unsplash.com/photo-1517840901100-8179e982acb7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)>)

# The Wild Oasis

## 1. Project Overview

The Wild Oasis is a private facing (internal) hotel management application.

## 2. Project Structure

- [ ] src/
  - [ ] features/
    - [ ] authentication/
    - [ ] bookings/
    - [ ] cabins/
    - [ ] check-in-out/
    - [ ] dashboard/
    - [ ] guests/
    - [ ] settings/
  - [ ] ui/
  - [ ] types/
  - [ ] hooks/
  - [ ] utils/
  - [ ] assets/
  - [ ] pages/
    - [ ] bookings/
    - [ ] cabins/
    - [ ] check-in/:bookingId
    - [ ] dashboard/
    - [ ] login/
    - [ ] settings/
    - [ ] users/
  - [ ] services/
  - [ ] store/

## 3. Technologies

- [ ] React
- [ ] React Router
- [ ] React Context
- [ ] React Query
- [ ] React Hook Form
- [ ] Styled Components
- [ ] React Icons
- [ ] React Hot Toast
- [ ] Recharts
- [ ] Date Fns
- [ ] Supabase

## 4. Project Goals

- [ ] Users of the application are hotel staff:

  - [ ] They need to be logged in to access the application and perform actions.
  - [ ] They should be able to upload an avatar, and change their name and password.
  - [ ] They should be able to update, delete and create new cabins (including uploading a photo).
  - [ ] They should be able to delete, check in, or check out a booking as the guest arrives or leaves.
  - [ ] They should be able to define a few application-wide settings, such as the breakfast price, min and max nights for bookings, etc.

- [ ] New users can only be signed up inside the application (guarantees that they are hotel staff).

- [ ] Application should have a table view with all cabins, showing the cabin photo, name, capacity, price, and current discount.

- [ ] Application should have a table view with all bookings, showing arrival and departure dates, status, and paid amount, as well as cabin and guest details.

- [ ] The booking status should be one of the following and be filterable by:

  - [ ] Unconfirmed (booked but not yet checked in)
  - [ ] Checked in (checked in)
  - [ ] Checked out (checked out)

- [ ] Other booking data includes:

  - [ ] Number of guests
  - [ ] Number of nights
  - [ ] Guest observations
  - [ ] Whether they booked breakfast and breakfast price

- [ ] Bookings are paid on arrival. Payment is confirmed inside the application.

- [ ] On check-in, the guest should have the ability to add breakfast for the entire stay if they haven't already.

- [ ] Guest data includes:

  - [ ] Full name
  - [ ] Email
  - [ ] National ID
  - [ ] Nationality
  - [ ] Country with flag

- [ ] The initial application screen should be a dashboard displaying important information for the last 7, 30, and 90 days:

  - [ ] List of guests checking in and out for the current day
  - [ ] Statistics on recent bookings, sales, check-ins, and occupancy rate
  - [ ] A chart showing all daily hotel sales, showing both total and extras (breakfast) sales
  - [ ] A chart showing statistics on stay duration, as this can be a good indicator of how many guests are staying for a long time

- [ ] Application needs a dark mode
