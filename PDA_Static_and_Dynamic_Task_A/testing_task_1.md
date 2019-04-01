### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.  t
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame

  def checkforAce(card)
    if card.value = 1  #not using double equals
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2) #def is spelled wrong, there is no comma between the 2 parameters
  if card1.value > card2.value
    return card.name #card.rb does not have a name method or attribute
  else
    card2 #no action here, "return" is probably missing before card2
  end
end
end #end is superfluous

def self.cards_total(cards)
  total  #meaningless word, probably should be: total = 0
  for card in cards
    total += card.value
    return "You have a total of" + total
  end
end


```
