# people = ["Bill", "Joe", "Stephen", "Michael", "Marvin", "Sally"]
#
# def sort_alphabetically(array)
#   return array.sort
# end
#
# puts sort_alphabetically(people)






# pets = ["cat", "dog", "bird", "rabbit"]
#
# def method_that_searches_data(array, animal)
#   return "Yes that animal is commonly a pet" if array.include?(animal)
#   return "That animal is not a conventional pet."
# end
#
# puts method_that_searches_data(pets, "dog")
#
# puts method_that_searches_data(pets, "dolphin")

hash_example = {
  'first_name' => 'katharina',
  'last_name' => 'bitzan',
  'age' => '26'
}

def return_keys_of_hash(hash)
  return hash.keys
end

puts "This is a hash:"
puts hash_example

puts "This is the result of  a function using a hash:"
puts return_keys_of_hash(hash_example)
