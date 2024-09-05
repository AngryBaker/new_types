import Cart from '../service/Cart';
import Movie from '../domain/Movie';

test('new card shouldnt be empty', () => {
  const cart = new Cart();
  const film = new Movie(666,
    "The Electrical Life of Louis Wain",
    2021,
    "UK",
    "You make the world beautiful and warm and kind",
    "drama",
    25,
    111);
  cart.add(film);

  expect(cart.items.length).toBe(1);
});