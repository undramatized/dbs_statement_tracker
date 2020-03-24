import setuptools

with open("README.md", "r") as fh:
    long_description = fh.read()

setuptools.setup(
    name="dbs_statement_tracker_undramatized",
    version="0.0.1",
    author="Rama Krishna",
    author_email="hello@rama-krishna.com",
    description="DBS Statement Tracking",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/undramatized/dbs_statement_tracker",
    packages=setuptools.find_packages(),
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires='>=3.6',
)