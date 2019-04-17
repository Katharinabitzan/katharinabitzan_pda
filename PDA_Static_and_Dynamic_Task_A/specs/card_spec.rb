require('minitest/autorun')
require('minitest/rg')
require_relative('../card.rb')
require_relative('../testing_task_2.rb')

class CardGameTest < Minitest::Test

  def setup
    @card1 = Card.new("hearts", 5)
    @card2 = Card.new("spades", 9)
    @card3 = Card.new("spades", 1)
  end

  def test_check_for_ace__false
    result = CardGame.checkforAce(@card1)
    assert_equal(false, result)
  end

  def test_check_for_ace__true
    result = CardGame.checkforAce(@card3)
    assert_equal(true, result)
  end

  def test_highest_card()
    result = CardGame.highest_card(@card1, @card2)
    assert_equal("9 of spades", result)
  end

  def test_self_cards_total
    cards = [@card1, @card2]
    result = CardGame.cards_total(cards)
    assert_equal("You have a total of 14 ", result)
  end

end
