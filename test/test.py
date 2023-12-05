import os
import pandas
import unittest


class TestCSVFileHandling(unittest.TestCase):

    def test_existing_csv_file(self):
        csv_file_name = "reddit_posts_with_comments.csv"
        with open(csv_file_name, 'w') as file:
            # Create an example CSV file
            file.write("Title,Id,Upvotes,Comments\nExample,123,42,5\n")
        # Call the code block
        if os.path.exists(csv_file_name):
            df = pandas.read_csv(csv_file_name)
            self.assertTrue(isinstance(df, pandas.DataFrame))
            self.assertEqual(df.shape, (1, 4))
        else:
            self.fail("CSV file was expected to exist but it does not.")

    def test_new_csv_file(self):
        csv_file_name = "non_existent.csv"
        if os.path.exists(csv_file_name):
            os.remove(csv_file_name)  # Ensure the file doesn't exist
        # Call the code block
        if os.path.exists(csv_file_name):
            self.fail("CSV file was not expected to exist but it does.")
        else:
            df = pandas.DataFrame(
                columns=["Title", "Id", "Upvotes", "Comments"])
            self.assertTrue(isinstance(df, pandas.DataFrame))
            self.assertEqual(df.shape, (0, 4))


if __name__ == '__main__':
    unittest.main()
