
class Card
  attr_reader :suit, :value

  def initialize(suit, value)
    @suit = suit
    @value = value.to_i
  end

  def name
    return "#{@value} of #{@suit}"
  end
end
